import AbsenceService from "../services/absenceService";

const absence = async (req, res) => {
  const { status } = req.body;
  const studentId = req.user.id;

  try {
    const absence = await AbsenceService.absenceCreate(studentId, status);
    res.status(201).json({ message: "Absensi berhasil", absence });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const viewAbsence = async (req, res) => {
  const studentId = req.user.id;

  try {
    const listAbsence = await AbsenceService.listAbsence(studentId);
    res.status(200).json({ listAbsence });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const AbsenceController = {
  absence,
  viewAbsence,
};
export default AbsenceController;
