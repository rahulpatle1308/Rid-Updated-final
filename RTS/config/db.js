const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      console.error("❌ MONGODB_URI is not defined in .env file");
      process.exit(1);
    }
    
    console.log("🔄 Attempting to connect to MongoDB Atlas...");
    console.log(`   Database: rtss`);
    
    // Mongoose 7 connection
    const conn = await mongoose.connect(MONGODB_URI);
    
    console.log(`✅ SUCCESS! MongoDB Atlas Connected!`);
    console.log(`   Host: ${conn.connection.host}`);
    console.log(`   Database: ${conn.connection.name}`);
    
    // Check connection details
    const db = mongoose.connection.db;
    
    // Get database stats
    try {
      const stats = await db.stats();
      console.log(`📊 Database Stats:`);
      console.log(`   Collections: ${stats.collections}`);
      console.log(`   Documents: ${stats.objects}`);
      console.log(`   Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
    } catch (err) {
      console.log("ℹ️ Could not get database stats");
    }
    
    // List all collections
    try {
      const collections = await db.listCollections().toArray();
      console.log(`📁 Collections found: ${collections.length}`);
      collections.forEach(col => {
        console.log(`   - ${col.name}`);
      });
      
      // If users collection doesn't exist, create it
      if (!collections.find(c => c.name === 'users')) {
        console.log("📝 Creating 'users' collection...");
        await db.createCollection('users');
        console.log("✅ 'users' collection created");
      }
    } catch (err) {
      console.log("⚠️ Could not list collections:", err.message);
    }
    
    return conn;
    
  } catch (error) {
    console.error(`❌ MONGODB ATLAS CONNECTION FAILED!`);
    console.error(`   Error: ${error.message}`);
    
    // Common Atlas errors and solutions
    console.error(`\n🔧 Atlas Connection Troubleshooting:`);
    console.error(`   1. Check your internet connection`);
    console.error(`   2. Verify MongoDB Atlas cluster is running`);
    console.error(`   3. Check IP whitelist in Atlas dashboard`);
    console.error(`   4. Verify username/password in connection string`);
    console.error(`   5. Make sure 'saurabh231018' is correct username`);
    console.error(`   6. Check if password 'Saurabh231018' is correct`);
    console.error(`   7. Visit: https://cloud.mongodb.com to check cluster status\n`);
    
    process.exit(1);
  }
};

// Enhanced event listeners
mongoose.connection.on('connected', () => {
  console.log('🎯 Mongoose successfully connected to Atlas');
});

mongoose.connection.on('error', (err) => {
  console.log(`❌ Mongoose connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ Mongoose disconnected from Atlas');
});

// Handle process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('👋 MongoDB Atlas connection closed gracefully');
  process.exit(0);
});

module.exports = connectDB;