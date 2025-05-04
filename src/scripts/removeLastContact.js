import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'fs/promises';
export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const newContactList = contacts.slice(0, contacts.length - 1);
    fs.writeFile(PATH_DB, JSON.stringify(newContactList, null, 2));
  } catch (error) {
    console.log(error);
    return [];
  }
};

removeLastContact();
