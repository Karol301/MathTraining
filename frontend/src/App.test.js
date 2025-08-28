import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  jest.resetAllMocks();
});

test("renders Start button", () => {
  render(<App />);
  expect(screen.getByText(/start/i)).toBeInTheDocument();
});

test("can generate a task and submit a correct answer", async () => {
  global.fetch = jest.fn()
    .mockResolvedValueOnce({
      json: async () => ({ task_id: 1, question: "2 + 2" })
    })
    .mockResolvedValueOnce({
      json: async () => ({ correct: true, time: 1.23 })
    });

  const { container } = render(<App />);

  fireEvent.click(screen.getByText(/start/i));

  const questionDiv = await screen.findByText((_, node) =>
    node.classList?.contains("question")
  );
  expect(container.querySelector(".question").textContent).toBe("2 + 2");

  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "4" } });
  fireEvent.click(screen.getByText(/submit/i));

  expect(await screen.findByText(/Correct!/i)).toBeInTheDocument();
  expect(await screen.findByText(/Time:/i)).toBeInTheDocument();
});

test("shows Wrong when answer is incorrect", async () => {
  global.fetch = jest.fn()
    .mockResolvedValueOnce({
      json: async () => ({ task_id: 2, question: "5 - 3" })
    })
    .mockResolvedValueOnce({
      json: async () => ({ correct: false, time: 2.5 })
    });

  const { container } = render(<App />);

  fireEvent.click(screen.getByText(/start/i));

  const questionDiv = await screen.findByText((_, node) =>
    node.classList?.contains("question")
  );
  expect(container.querySelector(".question").textContent).toBe("5 - 3");

  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "999" } });
  fireEvent.click(screen.getByText(/submit/i));

  expect(await screen.findByText(/Wrong!/i)).toBeInTheDocument();
  expect(await screen.findByText(/Time:/i)).toBeInTheDocument();
});
