declare global {
  namespace App {
    // interface Error {}
    // interface Locals {
    // }
    // interface PageData  {}
    // interface Platform {
    // }
  }

  enum TransitionType {
    None = "none",
    Slide = "slide",
    Fade = "fade",
    Zoom = "zoom",
    Concave = "concave",
    Convex = "convex",
  }
}

export {};
