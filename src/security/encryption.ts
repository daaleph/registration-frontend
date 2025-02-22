import * as crypto from 'crypto';

const ENCRYPTION_KEY = 'your-32-byte-encryption-key'; // Must be 32 bytes for AES-256
const IV_LENGTH = 16; // AES block size

export default function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH); // Generate a random initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`; // Return IV + encrypted data
}