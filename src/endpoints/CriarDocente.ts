import {Request, Response} from "express"
import { DocenteDataBase } from "../data/DocenteDataBase"
import { Docente } from "../model/Docente"

export const createDocente = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {nome, email, data_nasc, turma_id, especialidade} = req.body        
        const id = Number(Math.floor(Date.now() * Math.random()))
        // console.log(id)

        if(!nome || !email|| !data_nasc || !turma_id || !especialidade){
            throw new Error("Algum dado está incorreto ou faltando, favor verificar")
          }

        const conversorData = (date: string): string => {
            const arrData = date.split("/")
            return `${arrData[2]}-${arrData[1]}-${arrData[0]}`
        }
        const dataSQL = conversorData(data_nasc)

        const docente:Docente = new Docente(id, nome, email, dataSQL, turma_id, especialidade)

        const docenteDB = new DocenteDataBase()

        await docenteDB.criarDocente(docente)

        res.status(201).send("Docente cadastrado(a) com sucesso!!!")

    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message)
    }
}