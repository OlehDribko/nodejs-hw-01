import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  const newContact = await readContacts();

  for (let i = 0; i < number; i++) {
    newContact.push(createFakeContact());
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(newContact, null, 1), 'utf-8');
  } catch (error) {
    throw error;
  }
};

await generateContacts(1);
