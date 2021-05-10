import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Productos } from "../entity/Productos";
interface MulterRequest extends Request {
  file: any;
}
export class ProductosController {

    static getall = async (req: Request, res: Response) => {
        const productosRepository = getRepository(Productos);
        let productos
        try {
            productos = await productosRepository.find()
        } catch (error) {
            res.status(400).json({ message: 'No se encontraron resultados' })
        }
        if (productos.length > 0) {
            res.send(productos)
        }

    }

    static getonebyid = async (req: Request, res: Response) => {
        const {id} = req.params
        const productosRepository = getRepository(Productos);
        let productos
        try {
            productos = await productosRepository.findOneOrFail(id)
            res.send(productos)
        } catch (error) {
            res.status(400).json({ message: 'No se encontraron resultados' })
        }
    }

    static newproduct = async (req: Request, res: Response) => {
        const { nombre, descripcion, imagen, precio } = req.body

        const productosRepository = getRepository(Productos);

        let producto = new Productos()

        producto.descripcion = descripcion
        producto.nombre = nombre
        producto.imagen = imagen
        producto.precio=precio

        let resultado;
        try {
           resultado = await productosRepository.save(producto)
        } catch (error) {
            res.status(401).json({ message: 'Error al guardar' })
        }

        res.send(resultado)
    }

    static postImagen = async (req: Request, res: Response): Promise<any> => {
      const documentFile  = (req as MulterRequest).file;
      const {id} = req.params
      const productosRepository = getRepository(Productos);
    let producto;

    producto = await productosRepository.query(`UPDATE productos SET imagen = ? WHERE id = ?`, [documentFile.filename, id]);

    return res.json({
      message: 'ok'
    })
    }

    static editproduct = async (req: Request, res: Response) => {
        const { id } = req.params
        const { nombre, descripcion, precio } = req.body

        const productosRepository = getRepository(Productos);

        let producto;

        try {
            producto = await productosRepository.findOneOrFail(id)
            producto.descripcion = descripcion
            producto.nombre = nombre
            producto.precio = precio
        } catch (error) {
            res.status(401).json({ message: 'No se encontraron resultados' })
        }

        //guardamos
        try {
          await productosRepository.save(producto)
        } catch (error) {
          res.status(401).json({ message: 'Error al guardar' })
        }

        res.send(producto)
    }

    static deleteproduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        const productosRepository = getRepository(Productos);

       try {
           productosRepository.delete(id);
       } catch (error) {
        res.status(400).json({ message: 'Error al eliminar' });
       }

        res.status(201).json({ message: 'Eliminado' });
      };

}
