// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: [true, 'Full name is required'],
//         trim: true,
//         minlength: [2, 'Name must be at least 2 characters']
//     },
    
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         unique: true,
//         lowercase: true,
//         trim: true,
//         match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
//     },
    
//     countryCode: {
//         type: String,
//         default: "+91"
//     },
    
//     mobile: {
//         type: String,
//         required: [true, 'Mobile number is required'],
//         unique: true,
//         match: [/^\d{10}$/, 'Mobile number must be 10 digits']
//     },
    
//     role: {
//         type: String,
//         enum: ['student', 'teacher', 'organisation'],
//         default: 'student'
//     },
    
//     organisationType: {
//         type: String,
//         enum: ['Library', 'DCA', 'Coaching Centre', null],
//         default: null
//     },
    
//     dob: {
//         type: String,
//         default: null
//     },
    
//     state: {
//         type: String,
//         trim: true,
//         default: null
//     },
    
//     district: {
//         type: String,
//         trim: true,
//         default: null
//     },
    
//     // ✅ PROFILE PHOTO FIELD
//     profilePhoto: {
//         type: String,
//         default: null  // Will store the image path/URL
//     },
    
//     // ✅ PROFILE PHOTO PUBLIC ID (for Cloudinary)
//     profilePhotoPublicId: {
//         type: String,
//         default: null
//     },
    
//     password: {
//         type: String,
//         required: [true, 'Password is required'],
//         minlength: [6, 'Password must be at least 6 characters'],
//         select: false
//     },

//     testHistory: [{
//         resultId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "TestResult"
//         },
//         subject: String,
//         setNo: Number,
//         score: Number,
//         percentage: Number,
//         totalQuestions: Number,
//         incorrect: Number,
//         date: {
//             type: Date,
//             default: Date.now
//         }
//     }],

//     totalTestsAttempted: {
//         type: Number,
//         default: 0
//     },

//     averageScore: {
//         type: Number,
//         default: 0
//     },

//     lastLogin: {
//         type: Date,
//         default: null
//     }

// }, { timestamps: true });

// // ✅ VIRTUAL FOR PROFILE PHOTO URL
// userSchema.virtual('profilePhotoUrl').get(function() {
//     if (this.profilePhoto) {
//         return this.profilePhoto;
//     }
//     // Default avatar based on name
//     return `https://ui-avatars.com/api/?name=${encodeURIComponent(this.fullName || 'User')}&background=2563eb&color=fff&size=200`;
// });

// // ✅ VIRTUAL FOR INITIALS
// userSchema.virtual('initials').get(function() {
//     if (!this.fullName) return 'U';
//     return this.fullName.split(' ')
//         .map(n => n[0])
//         .join('')
//         .toUpperCase()
//         .substring(0, 2);
// });

// module.exports = mongoose.model("User", userSchema);