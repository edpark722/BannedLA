using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BannedLA.Startup))]
namespace BannedLA
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
