import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, MessageCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Help & Support</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Live Chat Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Chat with our support team in real-time
            </p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Send us an email for detailed inquiries
            </p>
            <Button className="w-full" variant="outline">
              Contact Support
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Knowledge Base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Browse our help articles and guides
            </p>
            <Button className="w-full" variant="outline">
              View Articles
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I update my voter registration?
              </AccordionTrigger>
              <AccordionContent>
                You can update your voter registration by visiting the Voter
                Registration tab and clicking on the "Update Registration" button.
                Follow the prompts to make your changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Where can I find my polling location?
              </AccordionTrigger>
              <AccordionContent>
                Your polling location can be found in the Polling Locations tab.
                Enter your address to find the nearest polling station.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I view upcoming elections?
              </AccordionTrigger>
              <AccordionContent>
                Upcoming elections are displayed on the dashboard under the
                "Upcoming Elections" tab. You can view details for each election by
                clicking on them.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}