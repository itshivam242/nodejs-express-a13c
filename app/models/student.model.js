module.exports = mongoose => {
    const Student = mongoose.model(
      "student",
      mongoose.Schema(
        {
          title: String,
          description: String
        },
        { timestamps: true }
      )
    );
    return Student;
  };