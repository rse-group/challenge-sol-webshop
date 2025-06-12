# 📄 SPLC 2025 Challenge-Solution Artifact Repository

This repository contains the **artifact for our Challenge-Solution paper titled _"PAPER TITLE"_**.

To keep things organized and clear, the artifacts are **separated by branch**, with each branch corresponding to a specific part or aspect of our solution.

## 🗂️ Branch Structure

Each branch contains source code, datasets, documentation, or other resources relevant to a particular component of the artifact. Please refer to the branch descriptions below for more details:

- [`main`](https://github.com/rse-group/challenge-sol-webshop/tree/main): Contains the user manual for our solution tool.
- [`tools`](https://github.com/rse-group/challenge-sol-webshop/tree/tools): Contains the source code for our solution tools, including:
    - **WinVMJ Composer**: Our backend composer tool.
    - **VMJ Libraries**: Supporting libraries for the **WinVMJ Composer** tool.
    - **UML to WinVMJ**: A converter tool that transforms UML-DOP diagrams into variability modules for Java (VMJ) source code.
    - **IFML-DOP Editor** and **IFML UI Generator**: Tools for UI modeling and React-based UI generation.
- [`winvmj-project`](https://github.com/rse-group/challenge-sol-webshop/tree/winvmj-project): Contains the WinVMJ project for the Webshop Product Line. This also includes the WinVMJ project for the Payment Gateway Product Line, which demonstrates our multi-product line implementation to handle payment functionalities.
- [`generated-product`](https://github.com/rse-group/challenge-sol-webshop/tree/generated-product): Contains the generated source code (VMJ and React application) produced using our solution tool. There are four products that are part of the subject system, namely **eShopOnContainers**, **Hipster Shop**, **Sock Shop**, and **Stan's Robot Shop**.
- [`uml-dop`](https://github.com/rse-group/challenge-sol-webshop/tree/uml-dop): Contains the UML-DOP diagrams representing the abstract backend structure of the Webshop Product Line.
- [`ifml-dop`](https://github.com/rse-group/challenge-sol-webshop/tree/ifml-dop): Contains the IFML-DOP diagrams representing the UI modeling of the Webshop Product Line.
