/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");

  };

  return (
    <div className="grid grid-cols-7">
      <div className="col-start-1 col-end-5 min-h-screen flex items-center justify-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Create account
          </Typography>
          <Typography color="gray" className="mt-1 font-normal mb-4">
            Start your 30-day free trial. Cancel anytime.
          </Typography>

          <Button
            size="md"
            variant="outlined"
            color="gray"
            className="flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="35px"
              height="35px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Sign up with Google
          </Button>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button onClick={handleClick} className="mt-6 bg-red-500" fullWidth>
              Create account
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-red-500 transition-colors hover:text-red-700"
              >
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      <div className="col-start-5 col-end-8 bg-[#f6feff] flex items-center justify-center">
        There should be an image
        
      </div>
    </div>
  );
}

export default LoginPage;
