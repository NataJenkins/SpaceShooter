import SceneTitle from "../js/scenes/sceneTitle.js";
import "jest-canvas-mock";
import "phaser";

it("works", () => {
  expect(1).toEqual(1);
});

test("SceneMain is a subclass of container", () => {
  expect(SceneTitle.prototype instanceof Phaser.Scene).toBe(true);
});

test("BaseScene is not a subclass of container", () => {
  expect(SceneTitle.prototype instanceof Phaser.GameObjects.Container).toBe(
    false
  );
});
