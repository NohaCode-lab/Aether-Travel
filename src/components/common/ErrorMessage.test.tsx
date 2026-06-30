import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage Component", () => {
  it("renders the default title and provided message", () => {
    render(<ErrorMessage message="حدث خطأ في الشبكة." />);

    expect(screen.getByText("An error occurred")).toBeInTheDocument();
    expect(screen.getByText("حدث خطأ في الشبكة.")).toBeInTheDocument();
  });

  it("renders a custom title when provided", () => {
    render(
      <ErrorMessage title="خطأ في الاتصال" message="فشل في جلب البيانات." />,
    );

    expect(screen.getByText("خطأ في الاتصال")).toBeInTheDocument();
    expect(screen.getByText("فشل في جلب البيانات.")).toBeInTheDocument();
  });

  it("does not render the retry button if onRetry is not provided", () => {
    render(<ErrorMessage message="خطأ فادح." />);

    // نستخدم queryByRole بدلاً من getByRole عندما نتوقع عدم وجود العنصر
    expect(
      screen.queryByRole("button", { name: /try again/i }),
    ).not.toBeInTheDocument();
  });

  it("renders the retry button and calls onRetry when clicked", () => {
    const handleRetry = vi.fn(); // دالة وهمية لتتبع الاستدعاءات
    render(
      <ErrorMessage message="يرجى المحاولة مرة أخرى." onRetry={handleRetry} />,
    );

    const retryButton = screen.getByRole("button", { name: /try again/i });
    expect(retryButton).toBeInTheDocument();

    // محاكاة نقرة المستخدم على الزر
    fireEvent.click(retryButton);
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });
});
