using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmailAI.Controllers
{
    // Marks this class as an API controller, enabling features like model validation and routing
    [ApiController]
    [Route("api/[controller]")] // Defines the base route for this controller as "api/EmailController"
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        // Constructor to inject the email service dependency
        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        // HTTP GET endpoint to retrieve emails for a specific user
        [HttpGet("{userId}")] // Route: api/EmailController/{userId}
        public async Task<ActionResult<IEnumerable<Email>>> GetEmails(string userId)
        {
            // Calls the email service to fetch emails for the given user ID
            var emails = await _emailService.GetEmailsAsync(userId);
            return Ok(emails); // Returns the emails with a 200 OK status
        }

        // HTTP POST endpoint to compose a new email
        [HttpPost] // Route: api/EmailController
        public async Task<ActionResult<Email>> ComposeEmail([FromBody] Email email)
        {
            // Calls the email service to create a new email
            var createdEmail = await _emailService.ComposeEmailAsync(email);

            // Returns the created email with a 201 Created status and a location header
            return CreatedAtAction(nameof(GetEmails), new { userId = email.UserId }, createdEmail);
        }

        // HTTP POST endpoint to summarize an email thread
        [HttpPost("summarize")] // Route: api/EmailController/summarize
        public async Task<ActionResult<string>> SummarizeEmailThread([FromBody] EmailThreadRequest request)
        {
            // Calls the email service to summarize the email thread by its ID
            var summary = await _emailService.SummarizeEmailThreadAsync(request.ThreadId);
            return Ok(summary); // Returns the summary with a 200 OK status
        }
    }

    // Interface defining the contract for the email service
    public interface IEmailService
    {
        // Method to fetch emails for a specific user
        Task<IEnumerable<Email>> GetEmailsAsync(string userId);

        // Method to compose a new email
        Task<Email> ComposeEmailAsync(Email email);

        // Method to summarize an email thread
        Task<string> SummarizeEmailThreadAsync(string threadId);
    }

    // Model representing an email
    public class Email
    {
        public string Id { get; set; } // Unique identifier for the email
        public string UserId { get; set; } // ID of the user who owns the email
        public string Subject { get; set; } // Subject of the email
        public string Body { get; set; } // Body content of the email
        public string Sender { get; set; } // Email address of the sender
        public List<string> Recipients { get; set; } // List of recipient email addresses
        public DateTime Date { get; set; } // Date the email was sent or received
        public string ThreadId { get; set; } // ID of the email thread (if applicable)
    }

    // Model representing a request to summarize an email thread
    public class EmailThreadRequest
    {
        public string ThreadId { get; set; } // ID of the thread to summarize
    }
}