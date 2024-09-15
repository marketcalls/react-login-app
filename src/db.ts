import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
  users: {
    key: string;
    value: { username: string; password: string };
  };
}

let db: IDBPDatabase<MyDB>;

async function initDB() {
  db = await openDB<MyDB>('UserDB', 1, {
    upgrade(db) {
      db.createObjectStore('users', { keyPath: 'username' });
    },
  });
}

export async function addUser(username: string, password: string): Promise<boolean> {
  if (!db) await initDB();
  try {
    await db.add('users', { username, password });
    return true;
  } catch (e) {
    console.error('Error adding user:', e);
    return false;
  }
}

export async function verifyUser(username: string, password: string): Promise<boolean> {
  if (!db) await initDB();
  const user = await db.get('users', username);
  return user?.password === password;
}

// Add a test user
initDB().then(() => addUser('testuser', 'testpassword'));