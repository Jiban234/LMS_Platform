import { AppWindowIcon, CodeIcon } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const onchangeHandler =(e,type)=>{
    const {name, value} = e.target;
    if(type === "signup"){
      setSignupInput({
        ...signupInput,
        [name]:value
      })
    }
    else{
      setLoginInput({
        ...loginInput,
        [name]:value
      })
    }
  }

  const handleRegistration=(type)=>{
    const inputData = type === "signup" ? signupInput : loginInput;
    console.log(inputData);;
  }

  return (
    <div className="flex w-full items-center justify-center">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input type="text" placeholder="username" onChange={(e)=>onchangeHandler(e,"signup")} name="name" value = {signupInput.name} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Email</Label>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  onChange={(e)=>onchangeHandler(e,"signup")}
                  name="email" 
                  value = {signupInput.email}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Password</Label>
                <Input type="password" placeholder="password" required onChange={(e)=>onchangeHandler(e,"signup")} name="password" value = {signupInput.password}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("signup")}>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Email</Label>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  onChange={(e)=>onchangeHandler(e,"login")}
                  name="email" 
                  value = {loginInput.email}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input type="password" placeholder="password" required onChange={(e)=>onchangeHandler(e,"login")} name="password" value = {loginInput.password}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
