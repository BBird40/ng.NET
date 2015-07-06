using System;

namespace ng.NET.WebAPI.Models.AccountView
{
    public class UserInfo
    {
        public string Email { get; set; }
        public bool HasRegistered { get; set; }
        public string LoginProvider { get; set; }    
    }
}