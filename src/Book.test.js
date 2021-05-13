import React from "react"
import { render } from "@testing-library/react"
import Book from "./Book"

jest.mock("./pages/0.js", () => {
  return {
    title: "Test Title",
    body: <>Test body</>,
  }
})

test("renders Book box", async () => {
  const { container, getByText, findByText } = render(<Book className="Box Test" />)

  const header = await findByText(/Test Title/i)
  expect(header).toHaveClass("Header")

  const content = await findByText(/Test body/i)
  expect(content).toHaveClass("Content")

  const footer = getByText(/2020/i)
  expect(footer).toHaveClass("Footer")

  const book = container.firstChild
  expect(book).toBeInTheDocument()
  expect(book).toHaveClass("Book", "Box", "Test")
})
