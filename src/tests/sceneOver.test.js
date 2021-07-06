import SceneOver from "../js/scenes/sceneOver.js";
import "jest-canvas-mock";
import "phaser";

it("works", () => {
  expect(1).toEqual(1);
});

test("SceneMain is a subclass of container", () => {
  expect(SceneOver.prototype instanceof Phaser.Scene).toBe(true);
});

test("BaseScene is not a subclass of container", () => {
  expect(SceneOver.prototype instanceof Phaser.GameObjects.Container).toBe(
    false
  );
});
