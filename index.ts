import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    //Creamos una camada
    // const camada = await prisma.camada.create({
    //     data: {
    //         nombre: 2717,
    //         dias: "Martes y jueves",
    //         modulo: "Backend"
    //     }
    // })
    // console.log(camada)

    // const camadas = await prisma.camada.createMany({
    //     data: [
    //         {
    //             nombre: 2817,
    //             dias: "Martes y jueves",
    //             modulo: "React"
    //         },
    //         {
    //             nombre: 3117,
    //             dias: "Martes y jueves",
    //             modulo: "Javascript"
    //         },
    //         {
    //             nombre: 3317,
    //             dias: "Lunes y miercoles",
    //             modulo: "Javascript"
    //         }
    //     ]
    // })
    // console.log(camadas);

    // const allCamadas = await prisma.camada.findMany();
    // console.log(allCamadas);

    // const camadaById = await prisma.camada.findUnique({
    //     where: {
    //         id: 3
    //     }
    // })
    // console.log(camadaById);

    // const camadasByNombre = await prisma.camada.findMany({
    //     where: {
    //         dias: "Martes y jueves"
    //     }
    // })
    // console.log(camadasByNombre);

    // const alumno = await prisma.alumno.create({
    //     data: {
    //         nombre: "Juan Perez",
    //         mail: "juan@gmail.com",
    //         edad: 25,
    //         camada: 2717
    //     }
    // })
    // console.log(alumno);

//     const alumnos = await prisma.alumno.createMany({
//       data: [
//         {
//           nombre: "Paula Molina",
//           mail: "paula@gmail.com",
//           edad: 26,
//           camada: 2817
//         },
//         {
//             nombre: "Romina Gomez",
//             mail: "romina@gmail.com",
//             edad: 27,
//             camada: 3117
//           }
//       ],
//     });
// console.log(alumnos);

    // const alumnosByCamada = await prisma.alumno.findMany({
    //     where : {
    //         camada: 2717
    //     }
    // })
    // console.log(alumnosByCamada);

    // const allAlumnos = await prisma.alumno.findMany({
    //     include: {
    //         camadas: true
    //     }
    // })
    // console.log(allAlumnos)

    const allAlumnos = await prisma.alumno.findMany({
        select : {
            nombre: true,
            mail: true,
            camadas: {
                select: {
                    nombre: true,
                    dias: true
                }
            }
        }
    })
    console.log(allAlumnos)

prisma.$disconnect();
  } catch (error) {
    console.log(error);
    prisma.$disconnect();
  }
};

main();
