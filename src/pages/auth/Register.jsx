import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Select from "react-select";

import { Input } from "@chakra-ui/react";
import { validationSchema } from "../../ValidateSchema/schema";
import { useFormik } from "formik";

const Register = () => {
  const { values, handleChange, handleSubmit, errors, touched, setFieldValue } =
    useFormik({
      
      initialValues: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        dateOfBirth: "",
        gender: "male", // Default value
        interests: [],
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        debugger;
        console.log(values);
      },
    });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Box bg="white" w="100%" h="100vh" display={"flex"}>
      <Box
        w="50%"
        h="100vh"
        bg="#3ca9fc"
        p={10}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={5}
      >
        <Image src="/assets/logo.png" boxSize={50} />
        <Text color="white" fontSize={38} fontWeight={700}>
          Welcome To Social Media
        </Text>
        <Text color="white" fontWeight={400} fontSize={18}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          possimus excepturi tempora, reiciendis repudiandae, voluptatibus quae
          autem modi odit velit quisquam placeat cupiditate corrupti?
          Perspiciatis repudiandae molestias temporibus? Inventore, officiis
          ullam reprehenderit odit quod quasi repudiandae. Possimus autem a,
          reprehenderit veniam aspernatur unde esse consequuntur error ex vero
          illum inventore?
        </Text>
      </Box>
      <Box
        w="50%"
        h="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box p={10} w="70%" bg="#f9f9f9eb">
          <Text fontSize={20} fontWeight={500} color="black">
            User Register
          </Text>
          <Text fontSize={20} fontWeight={500} color="#3ca9fc">
            What Type of Researcher Are you
          </Text>
          <Stack mt={5}>
            <form onSubmit={handleSubmit}>
              <FormControl
                isInvalid={errors.firstName && touched.firstName}
                mb={5}
              >
                <Input
                  placeholder="Enter Your First Name"
                  variant="flushed"
                  type="text"
                  borderColor={"#3ca9fc"}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <Text color="red">{errors.firstName}</Text>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={errors.lastName && touched.lastName}
                mb={5}
              >
                <Input
                  placeholder="Enter Your Last Name"
                  variant="flushed"
                  type="text"
                  borderColor={"#3ca9fc"}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <Text color="red">{errors.lastName}</Text>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={errors.mobileNumber && touched.mobileNumber}
                mb={5}
              >
                <Input
                  placeholder="Enter Your Mobile Number"
                  variant="flushed"
                  type="number"
                  borderColor={"#3ca9fc"}
                  onChange={handleChange}
                  value={values.mobileNumber}
                  name="mobileNumber"
                />
                {errors.mobileNumber && touched.mobileNumber ? (
                  <Text color="red">{errors.mobileNumber}</Text>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={errors.dateOfBirth && touched.dateOfBirth}
                mb={5}
              >
                <Input
                  placeholder="Enter Your Date of Birth"
                  variant="flushed"
                  type="date"
                  borderColor={"#3ca9fc"}
                  onChange={handleChange}
                  value={values.dateOfBirth}
                  name="dateOfBirth"
                />
                {errors.dateOfBirth && touched.dateOfBirth ? (
                  <Text color="red">{errors.dateOfBirth}</Text>
                ) : null}
              </FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                onChange={(value) => setFieldValue("gender", value)}
                value={values.gender}
                mb={5}
              >
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Stack>
              </RadioGroup>
              {errors.gender && touched.gender ? (
                <Text color="red">{errors.gender}</Text>
              ) : null}
              <FormControl
                isInvalid={errors.interests && touched.interests}
                mb={5}
              >
                <Select
                  options={options}
                  isMulti
                  onChange={(selectedOptions) =>
                    setFieldValue(
                      "interests",
                      selectedOptions.map((option) => option.value)
                    )
                  }
                  value={options.filter((option) =>
                    values.interests.includes(option.value)
                  )}
                  name="interests"
                />
                {errors.interests && touched.interests ? (
                  <Text color="red">{errors.interests}</Text>
                ) : null}
              </FormControl>
              <Button
                bg={"#3ca9fc"}
                color="white"
                mt={10}
                size="lg"
                float={"right"}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
