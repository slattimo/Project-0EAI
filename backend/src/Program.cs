using Microsoft.AspNetCore.Hosting; // Provides types for hosting a web application.
using Microsoft.Extensions.Hosting; // Provides types for building and running a host.

public class Program
{
    public static void Main(string[] args)
    {
        // Creates and runs the host for the application.
        // The host is responsible for managing the app's lifecycle and dependencies.
        CreateHostBuilder(args).Build().Run();
    }

    // Configures and creates an IHostBuilder instance.
    // The IHostBuilder is used to set up the application's hosting environment.
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args) // Creates a default host builder with pre-configured settings.
            .ConfigureWebHostDefaults(webBuilder => // Configures the web server for the application.
            {
                // Specifies the Startup class to configure services and middleware.
                webBuilder.UseStartup<Startup>();
            });
}