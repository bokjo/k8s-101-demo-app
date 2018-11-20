namespace dotnetcore_k8s_demo.Controllers
{
    public class HostInfo
    {
        public string Ip { get; set; }
        public string Hostname { get; set; }
        public string Version { get; set; }

        public HostInfo(string Ip, string Hostname, string Version) {
            this.Ip = Ip;
            this.Hostname = Hostname;
            this.Version = Version;
        }
    }
}
