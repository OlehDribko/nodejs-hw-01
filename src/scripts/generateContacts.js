import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const newContact = await readContacts();

  for (let i = 0; i < number; i++) {
    newContact.push(createFakeContact());
  }
  await fs.writeFile(PATH_DB, JSON.stringify(newContact, null, 1), 'utf-8');
  try {
  } catch (error) {
    throw error;
  }
};

generateContacts(1);
