using System;

namespace ng.NET.WebAPI.Models.AccountView
{
    public class ExternalLogin
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string State { get; set; }
    }
}