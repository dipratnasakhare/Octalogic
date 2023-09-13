import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom";



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginText, setLoginText] = useState("")
  const { toast } = useToast()
  
  const navigate = useNavigate()


  const LoginUser = async () => {
    let Admin = {
      email,
      password,
    };

   try{
    let res = await axios.post("https://reqres.in/api/login", Admin);
    if (res.data.token === "QpwL5tke4Pnpja7X4") {
      localStorage.setItem("octaMyUser","userLogin")
      navigate("/")
      setLoginText("")
    }
   }catch(error){
    setLoginText("wrong details try again")
    console.log(error)
   }

   
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Ēmail</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                {/* <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">User</SelectItem>
                    <SelectItem value="sveltekit">Admin</SelectItem>
                  </SelectContent>
                </Select> */}
              </div>
            </div>
          </form>
          <p className="text-red-500">{LoginText}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          
          <Button variant="outline" onClick={LoginUser}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
