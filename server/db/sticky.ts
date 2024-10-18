import connection from './connection.ts'
import { Sticky } from '../../models/sticky.ts'

export async function getAllStickyBeaks(db = connection): Promise<Sticky[]> {
  return db('fruit').select()
}
