import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useToast } from "./use-toast";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    emailAddress: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" })
});

const ContactSection: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            emailAddress: "",
            message: "",
        },
    });

    const { toast } = useToast();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("access_key", "8bced1a2-7a95-4706-86cd-5927e1e8189c"); //Fine to be public as only email address key
        formData.append("subject", "New Submission from emmett.dev");
        formData.append("from_name", "emmett.dev");
        formData.append("replyto", values.emailAddress);
        formData.append("name", values.name);
        formData.append("email", values.emailAddress);
        formData.append("message", values.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Form submitted successfully, I'll get back to you as soon as I can.",
                    variant: "success",
                    duration: 3000,
                });
                form.reset();
            } else {
                toast({
                    title: "Error",
                    description: "Form submission failed. Please try again later or contact me directly at emmett@emmett.dev",
                    variant: "destructive",
                    duration: 3000,
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            toast({
                title: "Error",
                description: "Form submission failed. Please try again later.",
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            Submitting...
                        </>
                    ) : (
                        "Submit"
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ContactSection;
