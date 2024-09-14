import AuthService from "../services/authService";

const loginStudent = async (req, res) => {
  const { nim, password } = req.body;

  try {
    const student = await AuthService.login(nim, password);
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const register = async (req, res) => {
  const { nim, nama } = req.body;

  try {
    const mahasiswa = await registerMahasiswa(nim, nama);
    res
      .status(201)
      .json({ message: "Mahasiswa berhasil terdaftar", mahasiswa });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const AuthController = {
    loginStudent,
    register
}

export default AuthController;