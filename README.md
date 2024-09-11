
<h1 align="center" style="font-weight: bold;">Super Graph Local 💻</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#colab">Collaborators</a>
<a href="#contribute">Contribute</a>
</p>

<p align="center">This project enables you to run the supergraph locally, you can combine your subgraphs and execute queries using the super-schema.graphql</p>

<h2 id="technologies">💻 Technologies</h2>

- ExpressJs
- Apollo Server

<h2 id="started">🚀 Getting started</h2>

You should run all your subgraphs with different ports at the same time, don't use `4000` port because that's supergraph port
once all subgraphs are running you can go to `server.ts` file and add each subgraph to the subgraph list
```js
 subgraphs: [
        { name: 'store', url: 'http://localhost:4001/graphql' },
        { name: 'location', url: 'http://localhost:4002/graphql' },
      ],
```
<i style="font-size:12px">Note: Name prop is a custom value, it could be the subgraph name </i>

once it's done you run your supergraph with `yarn start` and it will run on this link: `http://localhost:4000`

<h3>Prerequisites</h3>

- NodeJS v16.20.2
- Yarn

<h3>Cloning</h3>

```bash
git clone https://github.com/KevinArce98/supergraph-local.git
```

<h3>Starting</h3>

```bash
cd supergraph-local
yarn && yarn start
```

<h2 id="colab">🤝 Collaborators</h2>

<table>
<tr>

<td align="center">
    <a href="https://github.com/KevinArce98">
        <img src="https://avatars.githubusercontent.com/u/18059982?v=4" width="100px;" alt="Kevin Arias Profile Picture"/><br>
        <sub>
            <b>Kevin Arias</b>
        </sub>
    </a>
</td>

</tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

1. `git clone https://github.com/KevinArce98/supergraph-local.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!
