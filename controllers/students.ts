import { Request, Response } from "express";

import Student, { IStudent } from "../models/student";

export const getStudents = async (req: Request, res: Response) =>{
    const condicion = { estado: true }

    const students = await Student.find(condicion)

    res.json({
        students
    })
}

export const createStudent =async (req: Request, res: Response) => {
    const studentData: IStudent = req.body;

    const student = new Student(studentData)
    
    await student.save()

    res.json({
        msj: "Todo ok",
        student
    })
}

export const getStudentByDNI = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const student: IStudent | null = await Student.findOne({dni: dni})

    res.json({
        student
    })
}

export const updateStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const {estado, camada, ...data } = req.body;

    const student = await Student.findOneAndUpdate({dni: dni}, data)

    res.json({
        student
    })
}

export const deleteStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const student = await Student.findOneAndDelete({dni: dni})

    if(!student){
        res.json({
            msj: "El alumno no fue encontrado en la DB"
        })
        return
    }

    res.json({
        student
    })
}