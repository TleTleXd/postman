var express = require("express");
var router = express.Router();

dummyUsers = [
  {
    id: "c9e5e5c4-6543-4cbb-8439-54dc77d4f543",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
  },
  {
    id: "8f3a334b-4d2d-4712-9239-7c4a92f568e2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-234-5678",
  },
  {
    id: "b4b0a6f5-4c2e-4b1f-8c72-b3b8456d8d5a",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-345-6789",
  },
  {
    id: "a2c1d0e1-8a2e-4c5a-8d3a-4e1b2d5e1d4a",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "555-456-7890",
  },
  {
    id: "d4e5c6f7-7b3a-4c5e-8d6e-2e3b4a6d8c5b",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "555-567-8901",
  },
];
users = [
  {
    id: "c9e5e5c4-6543-4cbb-8439-54dc77d4f543",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
  },
  {
    id: "8f3a334b-4d2d-4712-9239-7c4a92f568e2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-234-5678",
  },
  {
    id: "b4b0a6f5-4c2e-4b1f-8c72-b3b8456d8d5a",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-345-6789",
  },
  {
    id: "a2c1d0e1-8a2e-4c5a-8d3a-4e1b2d5e1d4a",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "555-456-7890",
  },
  {
    id: "d4e5c6f7-7b3a-4c5e-8d6e-2e3b4a6d8c5b",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "555-567-8901",
  },
];
dummyUsers1 = [
  {
    id: "c9e5e5c4-6543-4cbb-8439-54dc77d4f543",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", users });
});

router.get("/services/:username", async function (req, res, next) {
  console.log(req.params.id);
  if (req.params.username === "admin") {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const tasks = await response.json();
      res.render("services", { title: "Services", tasks });
    } catch (error) {
      console.error("Error fetching tasks:", error);
      next(error);
    }
  } else {
    const tasks = [{id:"",title:"",completed:""}];
    res.render("services", { title: "Services", tasks });
  }
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "contacts" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About me" });
});

router.get("/users", function (req, res) {
  res.status(200).json({ dummyUsers });
});

router.post("/users", function (req, res) {
  console.log(req.body);
  const data = req.body.accounts;
  if (data == "admin") {
    res.status(201).json({ dummyUsers1 });
  }
  res.status(404).json({ data: "incorrect account" });
});

module.exports = router;
