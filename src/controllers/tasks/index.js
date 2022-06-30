const uuid = require("uuid").v4();
const data = require("./tasks.json");
const fs = require("fs");

/**
 *
 * @param {int} ms
 * @returns Promise
 */
const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * set a task status from a random number
 *
 * @returns string
 */
const setStatus = () => {
  const number = Math.floor(Math.random() * 3);

  if (number === 0) return "processed";
  if (number === 1) return "queued";

  return "done";
};

/**
 *
 * Start new task
 *
 * return the id of the new task
 *
 * return 500 on error
 */
exports.start = async (req, res) => {
  try {
    const task = {
      id: uuid,
      status: setStatus(),
    };

    await timeout(2500);

    // Add task to json file
    const taskArray = [...data, task];
    fs.writeFileSync(__dirname + "\\tasks.json", JSON.stringify(taskArray));

    res.status(200).json({ id: uuid });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * Get status of task
 *
 * return 404 if task was not found
 *
 * return 200 with the task if found
 *
 * return 500 on error
 */
exports.status = async (req, res) => {
  try {
    const { id } = req.params;

    const task = data.find((el) => el.id === id);

    await timeout(3000);

    if (!task) {
      return res.status(404).json({ message: "Could not find task" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
