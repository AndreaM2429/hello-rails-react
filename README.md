<a name="readme-top"></a>
<div align="center">

  <img src=app/assets/images/logo.png width=220px>
  <h1><b>Rails/React App</b></h1>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [Tests](#tests)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 Rails/React App <a name="about-project"></a>

**Rails/React App** is an sample app that use RoR as a backend throw an API that returns a random greeting. The front end of the app was build with webpack and Redux to manage the state and fetch the info from the API.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
<summary>Rails</summary>
  <ul>
    <li>
      <a href="https://guides.rubyonrails.org/">Guides</a>
    </li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<details>
<summary>RSpec</summary>
  <ul>
    <li><a href="https://hackernoon.com/how-to-write-your-first-tests-using-rspec-in-rails-applications-hhfk2bqs">In Rails</a></li>
  </ul>
</details>

<details>
<summary>Webpack</summary>
  <ul>
    <li><a href="https://betterprogramming.pub/react-with-rails-2022-bd28e1fcd355#ad0a">Tutorial</a></li>
  </ul>
</details>

<details>
<summary>Linters</summary>
  <ul>
    <li><a href="https://github.com/microverseinc/linters-config/tree/master/ror">Linters</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

- **PostgreSQL database**

- **Greeting table with seeds**

- **Root**

- **API endpoint to get a random greeting**

- **Webpack to display the greeting**

- **App and Greeting components**

- **Storage, reducers and slice to manage state and fetch API information**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

This repository includes files with Ruby lenguage.

### Prerequisites

In order to run this project you need to have install:
- Ruby check [this](https://www.ruby-lang.org/en/) to install it.
- Rails check [this](https://guides.rubyonrails.org/) to install it.
- Node.js check [this](https://nodejs.org/es/download/package-manager#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages) to install it.
- Postgresql check [this](https://www.postgresql.org/) to install it.
- Code editor

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/AndreaM2429/hello-rails-react
```

### Usage

You need to open the terminal and and navigate to the clone repository, run the following commands to be sure all the dependencies and gems are correctly install it:

```sh
  bundle intall
  npm install
```

After that run the following commands to create the database and start the app:

```sh
  rails db:create
  rails db:migrate
  rails db:seed
  ./bin/dev
```
Navigate to http://localhost:3000 and check the random greeting you got.

To check the linters you can use the commands:

Ruby on Rails linters
```sh
  rubocop
```

Stylelintrc linters
```sh
  npx stylelint "**/*.{css,scss}"
```

To fix the linter use any of the following options: 

Ruby on Rails
```sh
  rubocop --fix
  rubocop -a
  rubocop -A
```

Stylelintrc
```sh
  npx stylelint "**/*.{css,scss}" --fix
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 👥 Author <a name="authors"></a>

👤 **Andrea Manuel**
- GitHub: [@AndreaM2429](https://github.com/AndreaM2429)
- Twitter: [@AndreaManuelOr1](https://twitter.com/AndreaManuelOr1)
- LinkedIn: [Andrea Manuel](https://www.linkedin.com/in/andreamanuel24/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 🔭 Future Features <a name="future-features"></a>

- [ ] **Give some styles**

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## ⭐️ Show your support <a name="support"></a>

If you like this project you could clone the repo and work with it or do the changes in a new branch. Also you could let a message with your thoughts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for providing the necessary resources for this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>