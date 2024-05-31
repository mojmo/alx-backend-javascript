/**
 * This module defines the ClassRoom class, which represents a classroom with a limited capacity.
 */

export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance.
   *
   * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
