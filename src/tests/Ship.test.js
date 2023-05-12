import { Ship } from '../factories/Ship'

test('increases number of hits in your ship', () => {
  const ship = Ship(4, 0, false)
  /* ship.hit() */
  expect(ship.hit()).toBe(1)
})

test('is the ship sunk?', () => {
  const ship = Ship(3, 3, true)

  expect(ship.hasBeenSunk()).toBeTruthy()
})

test('gets the correct ship length', () => {
  const ship = Ship(3, 0, true)
  const shipLength = ship.getLength()

  expect(shipLength).toBe(3)
})

test('gets the correct number of hits on ship', () => {
  const ship = Ship(3, 0, true)
  ship.hit()

  const numOfHits = ship.getNumOfHits()

  expect(numOfHits).toBe(1)
})

test('trying to hit a sunk ship returns nothing', () => {
  const ship = Ship(3, 3, true)
  const shipHit = ship.hit()

  expect(shipHit).toBeUndefined()
})
