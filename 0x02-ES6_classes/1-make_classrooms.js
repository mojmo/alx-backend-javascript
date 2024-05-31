import ClassRoom from './0-classroom';

/**
 * Initializes an array of three ClassRoom objects.
 *
 * @returns {ClassRoom[]} An array containing three ClassRoom objects with sizes 19, 20, and 34.
 */
export default function initializeRooms() {
  const rooms = [];
  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));
  return rooms;
}
