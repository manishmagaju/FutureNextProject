import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters"],
      maxlength: [200, "Address cannot exceed 200 characters"],
    },
    dob: {
      type: Date,
      // required: [true, "Date of Birth is required"],
      validate: {
        validator: function (value) {
          // Ensure DOB is not in the future
          return value <= new Date();
        },
        message: "Date of Birth cannot be in the future",
      },
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["Male", "Female", "Other"],
        message: "Gender must be Male, Female, or Other",
      },
    },
    class: {
      type: String,
      required: [true, "Class is required"],
      enum: {
        values: [
          "Nursery",
          "LKG",
          "UKG",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
        ],
        message: "Invalid class name",
      },
    },
    parentName: {
      type: String,
      //required: [true, "Parent name is required"],
      trim: true,
      minlength: [2, "Parent name must be at least 2 characters"],
      maxlength: [50, "Parent name cannot exceed 50 characters"],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },
    emailId: {
      type: String,
      //required: [true, "Email ID is required"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    photo: {
      type: String, // store image URL or file path
      // required: [true, "Photo is required"],
    },
  },
  {
    timestamps: true, // auto add createdAt & updatedAt
  }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
