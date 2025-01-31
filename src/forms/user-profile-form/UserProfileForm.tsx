import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  adressLine1: z.string().min(1, "adressLine1 is required"),
  city: z.string().min(1, "city is required"),
  country: z.string().min(1, "country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser:User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading,currentUser}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues:currentUser,
    
  });


useEffect(()=>{
  form.reset(currentUser);

},[currentUser,form])




  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">
            User Profile Form
          </h2>
          <FormDescription>
            View and Edit your information here{" "}
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white"/>
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />


        <div className="flex flex-col md:flex-row gap-4">
        <FormField
          control={form.control}
          name="adressLine1"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>adressLine1</FormLabel>
              <FormControl>
                <Input {...field}  className="bg-white"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>city</FormLabel>
              <FormControl>
                <Input {...field}  className="bg-white"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1"> 
              <FormLabel>country</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        </div>
        {isLoading?<LoadingButton/>:<Button type="submit" className="bg-indigo-500">Submit</Button>}




      </form>
    </Form>
  );
};

export default UserProfileForm;
