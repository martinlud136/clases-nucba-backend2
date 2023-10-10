import { error } from "console";
import fs from "fs";

export const get = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(content));
    });
  });
};

export const save = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(content), (error) => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
};
