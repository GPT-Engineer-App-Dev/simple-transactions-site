import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    if (description && amount) {
      setTransactions([...transactions, { description, amount }]);
      setDescription("");
      setAmount("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <Input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" type="number" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addTransaction}>Add Transaction</Button>
        </CardFooter>
      </Card>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
