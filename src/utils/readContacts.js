import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');
    console.log(contacts);
    return JSON.parse(contacts);
  } catch (error) {
    throw error;
    return [];
  }
};
