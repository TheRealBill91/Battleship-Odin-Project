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
