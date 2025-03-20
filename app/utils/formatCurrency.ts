interface iAppProps {
  amount: number;
}

export function formatCurrency({ amount }: iAppProps) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(amount);
}
