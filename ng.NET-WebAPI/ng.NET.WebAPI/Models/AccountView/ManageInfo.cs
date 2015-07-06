using System;
using System.Collections.Generic;

namespace ng.NET.WebAPI.Models.AccountView
{
    public class ManageInfo
    {
        public string LocalLoginProvider { get; set; }
        public string Email { get; set; }
        public IEnumerable<UserLoginInfoViewModel> Logins { get; set; }
        public IEnumerable<ExternalLogin> ExternalLoginProviders { get; set; }    
    }
}