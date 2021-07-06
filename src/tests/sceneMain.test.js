import SceneMain from "../js/scenes/sceneMain.js";
import "jest-canvas-mock";
import "phaser";

it("works", () => {
  expect(1).toEqual(1);
});

test("SceneMain is a subclass of container", () => {
  expect(SceneMain.prototype instanceof Phaser.Scene).toBe(true);
});

test("BaseScene is not a subclass of container", () => {
  expect(SceneMain.prototype instanceof Phaser.GameObjects.Container).toBe(
    false
  );
});
