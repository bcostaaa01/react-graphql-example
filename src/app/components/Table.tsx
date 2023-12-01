'use client'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

interface Post {
    id: number;
    title: string;
    body: string;
}

const TableComponent = () => {
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://graphqlzero.almansi.me/api',
            cache: new InMemoryCache(),
        });

        client
        .query({
            query: gql`
                {
                    posts {
                        data {
                            id
                            title
                            body
                        }
                    }
                }
            `,
        })
        .then((result) => result.data.posts.data)
        .then(setData);
    }, []);

    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Body</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {data.map((post) => (
                        <Table.Row key={post.id}>
                            <Table.Cell>{post.id}</Table.Cell>
                            <Table.Cell>{post.title}</Table.Cell>
                            <Table.Cell>{post.body}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default TableComponent;