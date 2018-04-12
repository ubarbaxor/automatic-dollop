# automatic-dollop
Three.js experiments and stuff

## Get running :

This runs nice and easy using Docker. Follow [their instructions][1] or (on debian 9) :
```
# Clear previous versions
sudo apt-get remove docker docker-engine docker.io

# Update package cache & stuff
sudo apt-get update

# Install build prereqs
sudo apt-get install -y \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg2 \
     software-properties-common

# Add Docker repos' GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

# EXPECT :
# pub   4096R/0EBFCD88 2017-02-22
#       Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
# uid   Docker Release (CE deb) <docker@docker.com>
# sub   4096R/F273FCD8 2017-02-22
sudo apt-key fingerprint 0EBFCD88

# Add Docker repos
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"

# Update package cache again
sudo apt-get update

# Get Docker !
sudo apt-get install docker-ce
```

[1]: https://docs.docker.com/install
