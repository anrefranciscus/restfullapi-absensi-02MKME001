import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

const absenceCreate = async (studentId, status) => {
  const absence = await prisma.absence.create({
    data: {
      studentId,
      status,
      date: new Date(),
    },
  });
  return absence;
};

const listAbsence = async (studentId) => {
  const absenceList = await prisma.absensi.findMany({
    where: { studentId },
    orderBy: { date: "desc" },
  });
  return absenceList;
};

const AbsenceService = {
    absenceCreate,
    listAbsence
}

export default AbsenceService;