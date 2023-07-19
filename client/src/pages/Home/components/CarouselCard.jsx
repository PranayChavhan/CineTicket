import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import {
    StarIcon,
    HeartIcon,
  } from "@heroicons/react/24/solid";
function CarouselCard() {
  return (
    <Card className="w-full max-w-[20rem] shadow-lg">
    <CardHeader floated={false} color="blue-gray">
      <div className="h-[25rem] ">
        <img
          className=""
          src="https://wallpapercave.com/dwp1x/wp4318321.jpg"
          alt="ui/ux review check"
        />
      </div>
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      <IconButton
        size="sm"
        color="red"
        variant="text"
        className="!absolute top-4 right-4 rounded-full"
      >
        <HeartIcon className="h-6 w-6" />
      </IconButton>
    </CardHeader>
    <CardBody>
      <div>
        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 font-normal"
        >
          <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
          9.2/10 55.8K Votes
        </Typography>
      </div>
      <div className="mb-0 flex items-start justify-between">
        <Typography
          variant="h8"
          color="blue-gray"
          className="font-medium"
        >
          Mission: Impossible - Dead Reckoning Part One
        </Typography>
      </div>
    </CardBody>
  </Card>
  )
}

export default CarouselCard